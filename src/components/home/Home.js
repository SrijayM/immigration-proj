import React, {Component} from 'react'
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {useTable} from 'react-table';
import {Link} from "react-router-dom";


const Home = ({immigrate}) => {
  return (
    <div > 
         <div className="title-container">
      <h1 className="title">Immigration Intake Form Menu </h1>
    </div>
    <Table class="table-dark table" border={1} striped hover size='xl' variant="dark">
        <thead>
            <tr>
            <th>Form Number</th>
            
            <th>Alien Registration Number</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
        {immigrate ? immigrate.map((data, count)=>
           <tr>
                <td>
                    <p>Form {count+1}</p>
                </td> 
                <td>
                    {data.alien_reg_num} 
                </td> 
                <td>
                    <ButtonToolbar>
                    <Link to ={"/edit"} state={{num: count}}>
                        <Button className="edit-button">  
                            Edit
                        </Button>
                    </Link> 
                      

                    </ButtonToolbar>
                </td> 
           </tr>
        ):null}
        </tbody>
    </Table>
  
    <Link to ="/new">
        <Button className="new-button">  
            Create New Form
        </Button>
    </Link>
    
</div>
  )
}

export default Home