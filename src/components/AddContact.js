import React from 'react';
import { useState, useEffect } from 'react';
import { FormLabel } from '@cmsgov/design-system-core';
import { Button } from '@cmsgov/design-system-core';
import { $ } from 'react-jquery-plugin';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function AddContact(props) {
  //state to hold showing and hiding the form
  const [showForm, setshowForm] = useState(false);

  //state to hold the form data
  const [newForm, setNewForm] = useState({
    name: '',
    description: '',
    fruit: '',
  });

  // $(document).ready((e) => {
  //   if (e.keyCode === 13) {
  //     $('.add-btn').click();
  //   }
  // });

  //handelechange function for the form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  //when the list member is clicked on the form
  const handleSubmit = (e) => {
    e.preventDefault();

    props.addMember(newForm); //passed down the prop (addmember) from main.js

    setNewForm({
      name: '',
      description: '',
      fruit: '',
    });

    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: 'Your household member has been added',
      icon: 'success',
    });

    $('.close-btn').click();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        $('.close-btn').click();
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <>
      <Button
        onClick={() => setshowForm(true)} //we change the initialstate of the form to true
        className="add-btn"
        variation="solid"
      >
        Add new member
      </Button>

      {showForm ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <FormLabel>Name:</FormLabel>
              <input
                className="contact-field"
                type="text"
                placeholder="Enter contact name"
                value={newForm.name}
                name="name"
                onChange={handleChange}
                required
              />
              <FormLabel>Description:</FormLabel>
              <input
                className="contact-field"
                type="text"
                placeholder="Enter description"
                value={newForm.description}
                name="description"
                onChange={handleChange}
                required
              />
              <FormLabel>Favorite Fruit:</FormLabel>
              <input
                className="contact-field"
                type="text"
                placeholder="Enter a favorite fruit"
                value={newForm.fruit}
                name="fruit"
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="list-btn"
                variation="solid"
                // onClick={handleClick}
              >
                List member
              </Button>
              <Button
                onClick={() => setshowForm(false)}
                className="close-btn"
                variation="ghost"
              >
                Close
              </Button>
            </div>
          </form>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default AddContact;
