<>
  <Sidebar />
  <div className="content mt-5">
    <h2 className="mt-5">Approved Students</h2>
    <table class="table text-center">
      <tr>
        <th>Student ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Bithdate</th>
        <th>Year Level</th>
        <th>Course</th>
        <th>Email</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
      <tbody>
        {students
          ?.filter((student) => student.status == "Approved")
          .map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>
                {student.lastName}
                {", "}
                {student.firstName}
              </td>
              <td>{student.gender}</td>
              <td>{student.birthdate}</td>
              <td>{student.yearLevel}</td>
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.homead}</td>
              <td>
                <Link to="#">
                  <i className="bi bi-trash-fill pe-2" variant="danger"></i>
                </Link>
                <Link to="#">
                  <i
                    className="bi bi-pencil-fill"
                    variant="primary"
                    // onClick={handleEdit}
                  ></i>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</>;
