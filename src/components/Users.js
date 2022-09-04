import React, { useState, useEffect } from 'react';
import { Table, Modal, Button,Form } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'

export default function Users() {

    const [users, setUsers] = useState([])
    const [userID, setUserID] = useState("")
    const [getData, setGetData] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal,setShowEditeModal]=useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(async () => {
        await fetch('https://sabzlearn-f3a8d-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {
                console.log(Object.entries(data));
                setUsers(Object.entries(data))
            })
    }, [getData])
    useEffect(()=>{
      let mainUserInfo=users.find(user=>user[0]==userID)
      if(mainUserInfo){
        setFirstName(mainUserInfo[1].firstName)
        setLastName(mainUserInfo[1].lastName)
        setEmail(mainUserInfo[1].email)
      }
    }
      ,[userID])

    const removeHandler = async () => {
        
        await fetch(`https://sabzlearn-f3a8d-default-rtdb.firebaseio.com/users/${userID}.json`, {
            method: 'DELETE'
        }).then(response => console.log(response))
        
        setShowDeleteModal(false)
        setGetData(prev => !prev)
    }
    const editHandler=async ()=>{
      let userNewInfos={
        firstName,
        lastName,
        email,
      }
      await fetch(`https://sabzlearn-f3a8d-default-rtdb.firebaseio.com/users/${userID}.json` ,
      {
        method: 'PUT',
        body: JSON.stringify(userNewInfos)
      }).then(response => console.log(response))
        
      setShowEditeModal(false)
      setGetData(prev => !prev)

    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user[1].firstName}</td>
                            <td>{user[1].lastName}</td>
                            <td>{user[1].email}</td>
                            <td style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <AiFillDelete
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setShowDeleteModal(true)
                                        setUserID(user[0])
                                    }}
                                />
                                <AiFillEdit style={{ cursor: 'pointer' }}
                                        onClick={()=>{
                                          setShowEditeModal(true)
                                          setUserID(user[0])

                                        }} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>

            <Modal
                show={showDeleteModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Delete Confirm
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Are you sure to delete this user?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowDeleteModal(false)}>Close</Button>
                    <Button onClick={() => removeHandler()}>Yes, Delete</Button>
                </Modal.Footer>
            </Modal>
            {/* /*edit modal */ }
            
            <Modal
                show={showEditModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Edit user
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={firstName} onChange={event=>setFirstName(event.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="last name"  value={lastName} onChange={event=>setLastName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="email" value={email} onChange={event=>setEmail(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowEditeModal(false)}>Close</Button>
                    <Button onClick={() => editHandler()}>update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
