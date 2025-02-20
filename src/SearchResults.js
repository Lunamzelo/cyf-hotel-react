// import React from "react";
// import FakeBookings from "./data/fakeBookings.json"

// const SearchResults = () =>{
//     <table className="table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>First Name</th>
//           <th>Surname</th>
//           <th>Email</th>
//           <th>Room ID</th>
//           <th>Check In</th>
//           <th>Check Out</th>
//           <th>No of Nights</th>
//         </tr>
//       </thead>
//       <tbody>

//       </tbody>

//       </table>

// }
import React from "react";
import moment from "moment";
const SearchResults = props => {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No. of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <tr>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(result.checkInDate, "days")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
