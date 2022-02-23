import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Survey Form</h1>
      <main className="container">
        <form>
          <p className="para" style={{ color: "white" }}>
            Name
          </p>
          <input
            style={{ width: "300px" }}
            type="text"
            required
            placeholder="Enter Your Name"
          />
          <p className="para" style={{ color: "white" }}>
            Email
          </p>
          <input
            style={{ width: "300px" }}
            type="text"
            required
            placeholder="Enter Your Email"
          />

          <p className="para1" style={{ color: "white" }}>
            Age(optional)
          </p>
          <input
            style={{ width: "300px" }}
            type="text"
            required
            placeholder="Enter Your Age"
          />
          <p style={{ color: "white" }}>
            Which option best describes your current role?{" "}
          </p>
          <select style={{ width: "300px" }}>
            <option>Eng</option>
            <option>Devloper</option>
            <option>Doc</option>
            <option>Farmer</option>
          </select>

          <p className="para2" style={{ color: "white" }}>
            Would you recommend this application to a friends?
          </p>

          <section className="input">
            <label>
              <input type="radio" name="option" />
              <span style={{ color: "white" }}>Definitely</span>
            </label>
          </section>
          <section className="input1">
            <label>
              <input type="radio" name="option" />
              <span style={{ color: "white" }}>Maybe</span>
            </label>
          </section>
          <section className="input">
            <label>
              <input type="radio" name="option" />
              <span style={{ color: "white" }}>Not sure</span>
            </label>
          </section>

          <p style={{ color: "white" }}>
            Which is your favorite features of the application?
          </p>

          <select style={{ width: "300px" }}>
            <option>gallery</option>
            <option>music</option>
            <option>videos</option>
            <option>camera</option>
          </select>

          <p className="para3" style={{ color: "white" }}>
            What would you like to see improved?
          </p>

          <section className="input2">
            <label>
              <input type="radio" name="option" />
              <span style={{ color: "white" }}>Projects</span>
            </label>
          </section>
          <section className="input3">
            <label>
              <input type="radio" name="option" />
              <span style={{ color: "white" }}>Assessments</span>
            </label>
          </section>
          <section className="input4">
            <label>
              <input type="radio" name="option" />
              <span style={{ color: "white" }}>Mentorship</span>
            </label>
          </section>

          <p className="para4" style={{ color: "white" }}>
            Any comments or suggestions?
          </p>
          <textarea placeholder="Write something here"></textarea>
          <section>
            <button style={{ backgroundColor: "green", borderRadius: "4px" }}>
              Submit
            </button>
          </section>
        </form>
      </main>
    </div>
  );
}
