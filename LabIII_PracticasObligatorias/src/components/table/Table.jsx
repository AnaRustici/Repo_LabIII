import React from 'react'
import './Table.css';
import { netIncomes } from '../netIncomes/NetIncomes'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Table = () => {
    const mappedBrands = netIncomes.map((b, index) => (
        <Col key={index}>{b.brand}</Col>
    ))
    const mappedIncomes = netIncomes.map((i, index) => (
        <Col key={index}>{i.income}</Col>
    ))
    const sumIncomes = netIncomes.reduce(
        (accumulator, currentValue) => accumulator + currentValue.income, 0
    );
    const average = sumIncomes / netIncomes.length

    return (
        <Container className='container'>
            <Row>{mappedBrands}</Row>
            <Row>{mappedIncomes}</Row>
            <Row><p>Average incomes: {average.toFixed(2)}</p></Row>
        </Container>
    )
}

export default Table