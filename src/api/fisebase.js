//firebase 초기화
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
})
const auth = getAuth();
const database = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    return user;
  }).catch((error) => {
    return error.message;
  });
}

export async function logout() {
  return signOut(auth)
  .then(() => {
    return null;
  }).catch((error) => {
    return error.message;
  });
}

// 로그인정보 옵저버
export async function onUserStateChange( callBack ) {
  onAuthStateChanged(auth, async (user) => { // 비동기방식이라 async 적용
    const updatedUser = user ? await adminUser(user) : null;
    callBack(updatedUser);
  });
}

async function adminUser( user ) {
  return get(ref(database, 'admins'))
  .then((snapshot) => {
    if(snapshot.exists()) { // admins 키를 가진 데이터가 존재유무
      const admins = snapshot.val();  // snapshot value값 가져오기
      const isAdmin = admins.includes(user.uid);
      return {...user, isAdmin : isAdmin}
    }
    return user;
  })
}  