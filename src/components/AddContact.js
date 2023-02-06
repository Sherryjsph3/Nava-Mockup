import React from 'react';
import { useState } from 'react';
import { FormLabel } from '@cmsgov/design-system-core';
import { Button } from '@cmsgov/design-system-core';

function AddContact(props) {
  const [showForm, setshowForm] = useState(false);
  const [newForm, setNewForm] = useState({
    name: '',
    description: '',
    fruit: '',
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addMember(newForm);

    setNewForm({
      name: '',
      description: '',
      fruit: '',
    });
  };

  return (
    <>
      <Button
        onClick={() => setshowForm(true)}
        className="add-btn"
        variation="solid"
      >
        Add new member
      </Button>

      {showForm ? (
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
            <Button type="submit" className="list-btn" variation="solid">
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
      ) : (
        ''
      )}
    </>
  );
}

export default AddContact;
