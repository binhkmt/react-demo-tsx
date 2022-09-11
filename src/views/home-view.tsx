import { PropsWithChildren } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 } from "uuid";
// import { addTodo } from "../redux/action";
import { Row, Col, Typography, Select, Tag, Input, Divider, Radio } from "antd";
import { Button } from "react-bootstrap";

import { TodoList } from "../components/Todo/todo-list";

import { getTodoListSelector } from "../redux/selector";
import { IAppState, rootReducer } from "../redux/reducers";
import { ITodo } from "../App";

type Props = PropsWithChildren<{}>;

export function HomeView(props: Props) {
  const dispatch = useDispatch();
  //luu noi tai
  const [todoName, setTodoName] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const todoList = useSelector<IAppState, ITodo[]>((state) => {
    return getTodoListSelector(state, searchInput);
  });
  console.log(`App todolist`, todoList);

  const onSearchChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const onTodoNameChange = (e: any) => {
    setTodoName(e.target.value);
  };

  const onAddTodoClick = () => {
    let newTodo: ITodo = { id: v4(), name: todoName };
    dispatch(rootReducer.actions.addTodo(newTodo));
    setTodoName("");
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <Row justify="center">
          <Col span={24}>
            <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
              Search
            </Typography.Paragraph>
            <input
              value={searchInput}
              onChange={onSearchChange}
              type="text"
              placeholder="Tìm kiếm"
            ></input>
          </Col>
          <Col sm={24}>
            <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
              Filter By Status
            </Typography.Paragraph>
            <Radio.Group>
              <Radio value="All">All</Radio>
              <Radio value="Completed">Completed</Radio>
              <Radio value="Todo">To do</Radio>
            </Radio.Group>
          </Col>
        </Row>

        <Row
          style={{
            height: "calc(100% - 40px)",
            overflowY: "auto",
            marginBottom: 3,
            marginTop: 10,
          }}
        >
          <Col span={24}>
            <Input.Group style={{ display: "flex" }} compact>
              <input
                value={todoName}
                onChange={onTodoNameChange}
                type="text"
                placeholder="Nhập việc cần làm"
              ></input>
              <Select defaultValue="Medium">
                <Select.Option value="High" label="High">
                  <Tag color="red">High</Tag>
                </Select.Option>
                <Select.Option value="Medium" label="Medium">
                  <Tag color="blue">Medium</Tag>
                </Select.Option>
                <Select.Option value="Low" label="Low">
                  <Tag color="gray">Low</Tag>
                </Select.Option>
              </Select>
              <Button disabled={!todoName} onClick={onAddTodoClick}>
                Thêm
              </Button>
            </Input.Group>
          </Col>
        </Row>
        <Divider></Divider>
        <TodoList todos={todoList}></TodoList>
      </div>
    </>
  );
}
