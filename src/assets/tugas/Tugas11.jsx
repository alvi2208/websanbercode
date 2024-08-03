import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas11 = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    score: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://backendexample.sanbercloud.com/api/student-scores"
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${id}`
      );
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backendexample.sanbercloud.com/api/student-scores",
        formData
      );
      setData([...data, res.data]);
      setFormData({ name: "", course: "", score: 0 });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mata kuliah:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nilai:</label>
          <input
            type="number"
            name="score"
            value={formData.score}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {data.map((res) => (
          <li key={res.id}>
            {res.name} - {res.course} - {res.score}
            <button
              onClick={() => handleDelete(res.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tugas11;
