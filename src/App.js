import './App.scss';
import './css/simplified.scss';
import styled from 'styled-components';
import logo from './icons/logo.svg';
import ToDoList from './components/ToDoList';
import AddToDoItem from './components/AddToDoItem';
import LocalDataManager from './data/LocalDataManager';
import { useState } from 'react/cjs/react.development';
import DoneList from './components/DoneList';

const AppBody = styled.div`
  margin: 50px auto;
`;

const Header = styled.header`
  width: 90%;
  height: 200px;
  margin: 40px auto;
  box-shadow: 0 0 10px #111111;
  border-radius: 20px;
  background-color: #111111;
`;

const LogoBox = styled.div`
  flex: 1;
  max-width: 300px;
  height: 100%;
  background-color: #272727;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px;
`;

function App() {

  const localDataManager = new LocalDataManager();

	if (localDataManager.getObject('toDoList') == null) {
		localDataManager.saveObject({
			toDoList: []
    });
    
	}

  const [itemList, setItemList] = useState(
    localDataManager.getObject('toDoList')
  );

	localDataManager.setOnChangeListener(() => {
		setItemList(localDataManager.getObject('toDoList'))
	});

  function addItem(title) {

    let list = itemList;
    
    list.push({
      title,
      done: false
    });

    localDataManager.saveObject({
      toDoList: list
    });

  }

  function checkItem(index) {
    
    itemList[index].done = true;

    localDataManager.saveObject({
      toDoList: itemList
    });

  }

  function onItemRemove(index) {

    let currentList = itemList;
    currentList.splice(index, 1);
    
    localDataManager.saveObject({
      toDoList: currentList
    });

  }

  return (
    <AppBody>
      <Header className="flexBox rowDirection">
        <LogoBox className="flexBoxAlign">
          <Logo src={logo} />
        </LogoBox>
        <h1 className="flexBoxAlign appLogoText">To-Do List</h1>
      </Header>
      <AddToDoItem list={itemList} listHandler={addItem} />
      <ToDoList list={itemList} onItemCheck={checkItem} onItemRemove={onItemRemove} />
      <DoneList list={itemList} onItemRemove={onItemRemove} />
    </AppBody>
  );
}

export default App;
