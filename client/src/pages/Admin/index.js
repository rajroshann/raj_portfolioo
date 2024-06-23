import React, { useEffect } from "react";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminProject from "./AdminProject";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";

const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }

  }, [])

  return (

    <div>
      <div className=" bg-slate-600 flex justify-between p-5 shadow-2xl ">
        <div className="flex gap-1">

          <h1 className="  bg-slate-400 font-bold rounded-lg  p-3 m-1 shadow-2xl text-blue-600">PORTFOLIO ADMIN</h1>
          <div className=" bg-black w-36 h-[2px] flex mt-10"></div>

        </div>
        <div className="p-2"> <button className=" bg-slate-400 rounded-lg px-4  py-2 shadow-2xl font-bold"
          onClick={()=>{
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}>
          Logout</button></div>
      </div>

      {portfolioData && <div className=" mt- p-7 bg-slate-400 ">

        <Tabs defaultActiveKey="1" tabPosition="right">


          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>

          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experiences" key="3">
            <AdminExperiences />
          </TabPane>
          <TabPane tab="Projects" key="4">
            <AdminProject />
          </TabPane>
          <TabPane tab="courses" key="5">
            <AdminCourses />
          </TabPane>

          <TabPane tab="Contact" key="6">
            <AdminContact />
          </TabPane>

          {/* <TabPane tab="Tab 3" key="3">
  Content of Tab Pane 3
</TabPane> */}
        </Tabs>
      </div>}

    </div>
  );
}

export default Admin;
