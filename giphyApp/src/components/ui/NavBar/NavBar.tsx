import { FormEvent, useState } from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { setGif } from "../../../redux/slices/gif";

const API_KEY = import.meta.env.VITE_API_KEY;

export const NavBar = () => {
  const dispatch = useAppDispatch()
  const fetchGif = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`
      );

      const data = await response.json();
      const parseData = data.data.map((el: any) => ({
        urlGif: el.images.fixed_height.url,
        title: el.title,
      }));
      dispatch(setGif(parseData));
      console.log(parseData);
    } catch (error) {
      console.warn(error);
    }
  };
  const [queryInput, setQueryInput] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchGif(queryInput);
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form onSubmit={submit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              onChange={(e) => {
                setQueryInput(e.target.value);
              }}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};
