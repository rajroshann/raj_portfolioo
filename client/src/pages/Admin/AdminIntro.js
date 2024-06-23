import React from 'react'
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';


function AdminIntro() {
  const dispatch = useDispatch();

  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id : portfolioData.intro._id,

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
        initialValues={portfolioData?.intro}>


        <Form.Item name='welcometext' label='welcometext'>
          <Input placeholder='intro' />
        </Form.Item>
        <Form.Item name='firstname' label=' firstname'>
          <Input placeholder=' firstname' />
        </Form.Item>
        <Form.Item name='lastname' label='lastname'>
          <Input placeholder='lastname' />
        </Form.Item>
        <Form.Item name='caption' label='caption'>
          <Input placeholder='caption' />
        </Form.Item>
        <Form.Item name='description' label='description'>
          <Input.TextArea  placeholder=' description' />
        </Form.Item>
        <div className="flex justify-end">
          <button className=' bg-slate-700 px-8 py-2 text-white font-semibold text-1xl rounded-lg' type='submit'>Save</button>
        </div>
      </Form>




    </div>
  )
}

export default AdminIntro
