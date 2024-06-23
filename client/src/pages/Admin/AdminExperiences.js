import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, message, Input } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from "axios";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const [showAddEditModel, setshowAddEditModel] = useState(false);
  const [selectedItemForEdit, setselectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  useEffect(() => {
    if (selectedItemForEdit) {
      setType("edit");
      setshowAddEditModel(true);
    }
  }, [selectedItemForEdit]);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (type === "edit") {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModel(false);
        setselectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="">
      <div className="flex justify-end">
        <button className='text-white font-semibold bg-slate-700 px-4 py-2 rounded-lg'
          onClick={() => {
            setselectedItemForEdit(null);
            setshowAddEditModel(true);
            setType("add");
          }}> ADD Experience</button>
      </div>

      <div className='grid grid-cols-4 gap-5 w-full pt-3 sm:grid-cols-1'>
        {experience.map((experienceItem, index) => (
          <div key={index} className="shadow-xl border-gray-500 border p-5 text-center  bg-slate-500 flex flex-col  ">
            <h1 className='font-semibold text-red-500 text-xl'>{experienceItem.period}</h1>
            <hr />
            <hr />
            <hr />
            <div className="pt-3 text-lg text-left">
              <h1 className=' text-blue-600 font-semibold'> Company : {experienceItem.company} </h1>
              <h1>  Role : {experienceItem.title}</h1>
              <h1> Description : {experienceItem.description}</h1>
            </div>
            <div className="  flex  gap-2 justify-end">
              <button className='bg-green-700 rounded-lg  px-4 py-1 font-semibold text-lg text-white'
                onClick={() => {
                  onDelete(experienceItem);
                }}> Delete  </button>
              <button className='bg-black rounded-lg px-4 py-1  font-semibold   text-white'
                onClick={() => {
                  setselectedItemForEdit(experienceItem);
                }}
              > E D I T </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setshowAddEditModel(false);
            setselectedItemForEdit(null);
          }}
        >
          <Form layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}>
            <Form.Item name='period' label='period'>
              <Input placeholder='period' />
            </Form.Item>
            <Form.Item name='title' label='Title'>
              <Input placeholder='Title' />
            </Form.Item>
            <Form.Item name='company' label='company'>
              <Input placeholder='company' />
            </Form.Item>
            <Form.Item name='description' label='Description'>
              <Input.TextArea placeholder='description' />
            </Form.Item>

            <div className="flex justify-end gap-1 font-semibold ">
              <button className='bg-slate-500 px-5 py-2  rounded-lg ' onClick={() => {
                setshowAddEditModel(false);
                setselectedItemForEdit(null);
              }}>
                Cancel</button>
              <button className='text-white bg-slate-800 px-5 py-2 rounded-lg' type='primary' htmlType='submit'>
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminExperiences;
