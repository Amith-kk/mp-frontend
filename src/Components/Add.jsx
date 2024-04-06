import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../../services/allAPI'


function Add({setUploadVideoResponse}) {

  const [uploadVideo, setUploadVideo]=useState({
    id:"",
    caption:"",
    url:"",
    link:""
  })
  // console.log(uploadVideo);

  const getYoutubeEmbedLink = (e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let  vID = value.split("v=")[1].slice(0.11)
      // console.log(vID);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async ()=>{
    const { id,caption,url,link }= uploadVideo
    if (!id || !caption || !url || !link){
      alert("please fill the missing fields")
    }else{
      //store uploaded video to json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result.status);
      if(result.status >= 200 && result.status<300)
      {
      //sucess
      handleClose()
      //empty fields
      setUploadVideo({
      id:"",caption:"",url:"",link:""
    })
    //after getting success response
    setUploadVideoResponse(result.data)
  }else{
    alert(result.message)
    console.log(result.response.data)
  }
    }
  }

  return (
    <>
    <div className="d-flex align-items-center">
      <h5 className='mt-2'>Upload Videos</h5>
      <button className='btn' onClick={handleShow}><i class='fa-solid fa-arrow-up-from-bracket fa-2x mb-2'></i></button>
    </div>
    {/* modal */}

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
        controlId="floatingInputId"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name">
        <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
      <br />
      <FloatingLabel
        controlId="floatingInputImage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video URL">
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeEmbedLink} />
      </FloatingLabel>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add