import styled from "styled-components";
import ToDoItem from './ToDoItem';

const Body = styled.div`
	color: #DDDDDD;
	width: calc(90% - 40px);
	margin: 40px auto;
	padding: 20px;
	overflow-y: auto;
	border-radius: 20px;
	background-color: #111111;
`;

export default function ToDoList(props) {

	let noUndoneItems = true;

	for (let i=0; i<props.list.length; i++) {
		if (!props.list[i].done) {
			noUndoneItems = false;
			break;
		}
	}

	return (
		<Body>
			<div style={{padding: '10px', fontSize: '28px'}}>
				A fazer:
			</div>
			{
				!noUndoneItems ?
					props.list.map((item, index) => 
						(
							!item.done ?
								<ToDoItem
									title={item.title}
									index={index}
									onCheck={() => { props.onItemCheck(index); }}
									onItemRemove={props.onItemRemove} 
									delay={-index * 100}
									key={index} /> : null
						)
					)
				: <div style={{padding: '10px', fontSize: '18px'}}>
					Você ainda não registrou nenhuma tarefa.
				</div>
			}
		</Body>
	);

}