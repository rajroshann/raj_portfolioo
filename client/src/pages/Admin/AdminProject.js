import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, message, Input } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from "axios";


function AdminProject() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
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
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setshowAddEditModel(false);
        setselectedItemForEdit(null);
        dispatch(ReloadData(true));
        Form.resetField();
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
      const response = await axios.post("/api/portfolio/delete-project", {
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
          }}> ADD PROJECT </button>
      </div>

      <div className='grid grid-cols-3 gap-5 w-full pt-3  sm:grid-cols-1'>
        {project.map((projectItem, index) => (
          <div key={index} className="shadow-xl border-gray-500 border p-5 text-center  bg-slate-500 flex flex-col  ">
            <h1 className='font-semibold text-red-500 text-xl'>{projectItem.title}</h1>
            <hr />
            <hr />
            <hr />
            <div className="pt-3 text-lg text-left">
              <img src={projectItem.image} alt="" />
              <h1>  Title : {projectItem.title}</h1>
              <h1> Description : {projectItem.description}</h1>
              <h1> Tech : {projectItem.Tech}</h1>
              <h1> Link : {projectItem.link}</h1>
            </div>
            <div className="  flex  gap-2 justify-end">
              <button className='bg-green-700 rounded-lg  px-4 py-1 font-semibold text-lg text-white'
                onClick={() => {
                  onDelete(projectItem);
                }}> Delete  </button>
              <button className='bg-black rounded-lg px-4 py-1  font-semibold   text-white'
                onClick={() => {
                  setselectedItemForEdit(projectItem);
                }}
              > E D I T </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Project " : "Add Project"}
          footer={null}
          onCancel={() => {
            setshowAddEditModel(false);
            setselectedItemForEdit(null);
          }}
        >
          <Form 
          Form={Form}
          layout="vertical"
            onFinish={onFinish}
            initialValues={{
              ...selectedItemForEdit,
              Tech: selectedItemForEdit?.Tech.join(" , ")
            } || {}}>
            <Form.Item name='Tech' label='Tech'>
              <Input placeholder='Tech' />
            </Form.Item>
            <Form.Item name='title' label='Title'>
              <Input placeholder='Title' />
            </Form.Item>
            <Form.Item name='image' label='image'>
              <Input placeholder='Image' />
            </Form.Item>
            <Form.Item name='link' label='Link'>
              <Input placeholder='Link' />
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

export default AdminProject
