import React from 'react'
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';


function AdminContact() {

  const dispatch = useDispatch();

  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id : portfolioData.contact._id,

      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.contact}>


        <Form.Item name='Name' label='NAME'>
          <Input placeholder=' name' />
        </Form.Item>
        <Form.Item name='Age' label='Age'>
          <Input placeholder='Age' />
        </Form.Item>
        <Form.Item name='Gmail' label='Gmail'>
          <Input  placeholder=' Gmail' />
        </Form.Item>
        
        <Form.Item name='Contact_No' label='Contact No'>
          <Input placeholder=' Contact no' />
        </Form.Item>
        
        <Form.Item name='country' label='country'>
          <Input placeholder=' country' />
        </Form.Item>
        <div className="flex justify-end">
          <button className=' bg-slate-700 px-8 py-2 text-white font-semibold text-1xl rounded-lg' type='submit'>Save</button>
        </div>
      </Form>




    </div>
  )
}

export default AdminContact
