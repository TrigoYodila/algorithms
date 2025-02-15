import React, { useState } from 'react';

function ReactListChallenge() {
  // Initialisation de l'état avec une liste d'éléments
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Grapes']);

  // Fonction pour supprimer un élément de la liste
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Fonction pour ajouter un nouvel élément à la liste
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>React List Challenge</h1>
      
      {/* Affichage de la liste d'éléments */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {/* Bouton pour supprimer un élément */}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Ajouter un élément */}
      <button onClick={() => addItem('Pineapple')}>Add Pineapple</button>
    </div>
  );
}




import React, { useState } from 'react';

function ReactListForm() {
  // Initialisation de l'état de la liste
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Grapes']);
  const [newItem, setNewItem] = useState(''); // Valeur du champ de saisie
  const [editIndex, setEditIndex] = useState(null); // Index de l'élément en cours de modification
  const [editItem, setEditItem] = useState(''); // Valeur de l'élément à modifier

  // Fonction pour ajouter un élément à la liste
  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem(''); // Réinitialiser le champ de saisie
    }
  };

  // Fonction pour modifier un élément de la liste
  const updateItem = () => {
    if (editItem) {
      const updatedItems = [...items];
      updatedItems[editIndex] = editItem;
      setItems(updatedItems);
      setEditItem(''); // Réinitialiser la valeur de l'élément modifié
      setEditIndex(null); // Réinitialiser l'index de l'élément modifié
    }
  };

  // Fonction pour supprimer un élément de la liste
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Fonction pour lancer l'édition d'un élément
  const editItemHandler = (index) => {
    setEditIndex(index);
    setEditItem(items[index]); // Remplir le champ de saisie avec l'élément à modifier
  };

  return (
    <div>
      <h1>React List with Add, Edit, and Remove</h1>

      {/* Formulaire d'ajout */}
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Formulaire de modification */}
      {editIndex !== null && (
        <div>
          <input
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
            placeholder="Edit item"
          />
          <button onClick={updateItem}>Update Item</button>
        </div>
      )}

      {/* Liste des éléments */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItemHandler(index)}>Edit</button>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReactListForm;
