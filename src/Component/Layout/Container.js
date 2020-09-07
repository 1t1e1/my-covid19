import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function MyComponent(prop) {
	return <Container>{prop.children}</Container>;
}
