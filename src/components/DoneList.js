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

export default function DoneList(props) {

	return (
		<Body>
            <div style={{padding: '10px', fontSize: '28px'}}>
				Historico:
			</div>
			{
				props.list.length > 0 ?
					props.list.map((item, index) => 
						(
							item.done ?
								<ToDoItem
                                    done={true}
									title={item.title}
									index={index}
									onCheck={() => { props.onItemCheck(index); }}
									onItemRemove={props.onItemRemove} 
									delay={-index * 100}
									key={index} /> : null
						)
					)
				: <div style={{padding: '10px', fontSize: '18px'}}>
                    Você ainda não completou nenhuma tarefa.
                </div>
			}
		</Body>
	);

}