import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import "./NewExpenditure.css";
import { toast } from "react-toastify";
import { createFieldService } from "../../../../APIServices/FIeld/Field/FieldService";
import useFetch from "../../../../Hooks/useFetch";
import { Select } from "antd";
const NewExpenditure = ({ openPop, setPop, onAdd }) => {
  const [field, setField] = useState(null);
  const [users, setuser] = useState([]);
  const { data } = useFetch("/auth/users?limit=99999");
  useEffect(() => {
    setuser(data?.users);
  }, [data?.users]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createFieldService(field);
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      toast.success(data);
      onAdd();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.response?.data);
    }
  };
  const options = [];
  for (let i = 0; i < users.length; i++) {
    options.push({
      label: users[i]?.name,
      value: users[i]?._id,
    });
  }
  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      {openPop && (
        <div className="new-workshop">
          <div className="new-workshop-pop">
            <div className="popUp rounded col-5 mx-auto bg-white  border border-3  shaddow  p-4  ">
              <div className="text-end">
                <button
                  onClick={() => setPop(false)}
                  className="border-0 bg-transparent px-0 "
                >
                  <BsX size={40} />
                </button>
              </div>
              <div className="p-4 pt-0">
                <div
                  style={{ fontSize: "24px" }}
                  className="mb-2 fw-semibold text-center "
                >
                  Add New Field
                </div>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="my-2 d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="location">Field Location*</label>
                    <input
                      type="text"
                      id="location"
                      required
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="location"
                      placeholder="Location"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="area">Field Size*</label>
                    <input
                      type="text"
                      required
                      id="area"
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="area"
                      placeholder="Area in Hect"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="owner">Owner*</label>
                    <select
                      type="text"
                      id="owner"
                      onChange={handleChange}
                      required
                      className="border border-2 rounded p-1"
                      name="owner"
                      placeholder="Area in Hect"
                    >
                      <option value="">Select owner</option>
                      {Array.isArray(users)
                        ? users?.map((val, index) => (
                            <option value={val?._id} key={index}>
                              {val?.name}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="maintainer">Maintainer*</label>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select"
                      onChange={handleSelectChange}
                      options={options}
                    />
                    <select
                      type="text"
                      id="maintainer"
                      required
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="maintainer"
                      placeholder="Area in Hect"
                    >
                      <option value="">Select Maintainer</option>
                      {Array.isArray(users)
                        ? users?.map((val, index) => (
                            <option value={val?._id} key={index}>
                              {val?.name}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="assign-submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewExpenditure;
