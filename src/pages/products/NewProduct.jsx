import React, { useState } from 'react';
import { addNewProduct } from 'api/fisebase';
import { uploadImage } from 'api/upload';
import Button from 'components/ui/Button';

const NewProdut = (props) => {
  const [ prd, setPrd ] = useState({});
  const [ imgFile, setImgFile ] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품 사진 cLoudinary에 업로드 후, URL 가져오기
    uploadImage(imgFile)
    .then( url => {
      addNewProduct(prd, url)
    })

    // Firebase에 새로운 제품 추가
  }
  const handleChange = (e) => {
    const {name, value, files } = e.target;
    if( name === 'file') {
      setImgFile(files && files[0])
      return;
    }
    setPrd((prd)=> ({...prd, [name]: value}))
  }
  return (
    <section>
      { imgFile && <img src={URL.createObjectURL(imgFile)} alt="product file" /> }
      <form onSubmit={handleSubmit}>
        <input type="file" accept='image/*' name='file' required onChange={handleChange} />
        <input type="text" name='title' value={prd.title ?? ''} placeholder='제품명 입력하세요' required onChange={handleChange} />
        <input type="number" name='price' value={prd.price ?? ''} placeholder='가격을 입력하세요' required onChange={handleChange} />
        <input type="text" name='category' value={prd.category ?? ''} placeholder='카테고리를 입력하세요' required onChange={handleChange} />
        <input type="text" name='desc' value={prd.desc ?? ''} placeholder='제품설명을 입력하세요' required onChange={handleChange} />
        <input type="text" name='options' value={prd.options ?? ''} placeholder='콤마(,)로 구분하세요' required onChange={handleChange} />
        <Button text={'Submit'} />
      </form>
    </section>
  )
};

export default NewProdut;