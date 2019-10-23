import React from 'react'
import './styles.css'

const Detail = ({compare, itemDetail}) =>
  <div className="row compare">
    <div className="text-center">
    {itemDetail && 
      <table className="table">
          <tr>
              <th key={itemDetail.id}>
                {itemDetail.name}
              </th>
              <td><input type="submit" className="closeButton" value="CLOSE DETAIL" onClick={() => compare(null)}/></td>
          </tr>
          <tr>
              <td>Age:</td>
              <td>{itemDetail.age}</td>
          </tr>
          <tr>
              <td>friends:</td>
              <td> {itemDetail.friends.join(", ")}</td>
          </tr>
          <tr>
              <td>hair color:</td>
              <td>{itemDetail.hair_color}</td>
          </tr>
          <tr>
              <td>height:</td>
              <td>{itemDetail.height}</td>
          </tr>
          <tr>
              <td>professions:</td>
              <td> {itemDetail.professions.join(", ")}</td>
          </tr>
          <tr>
              <td>weight:</td>
              <td>{itemDetail.weight}</td>
          </tr>         
      </table>
      }
    </div>
  </div>;

export default Detail
