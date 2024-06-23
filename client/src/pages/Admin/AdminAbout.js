import React from 'react'
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from 'antd';


function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempskills = values.skills.split(",");
        values.skills= tempskills;
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,

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
        initialValues={
          {
            ...portfolioData.about,
            skills: portfolioData.about.skills.join(" , "),
          }
        }>


        <Form.Item name='lottieURL' label=' lottieURL'>
          <Input placeholder=' lottieURL' />
        </Form.Item>

        <Form.Item name='des1' label='des1'>
          <Input.TextArea placeholder='des1' />
        </Form.Item>
        <Form.Item name='des2' label='des2'>
          <Input.TextArea placeholder=' des2' />
        </Form.Item>
        <Form.Item name='skills' label='skill'>
          <input placeholder=' skill' />
        </Form.Item>
        <div className="flex justify-end">
          <button className=' bg-slate-700 px-8 py-2 text-white font-semibold text-1xl rounded-lg' type='submit'>Save</button>
        </div>
      </Form>




    </div>
  )
}

export default AdminAbout
