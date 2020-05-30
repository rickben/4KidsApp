import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    4KIDS
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/items/list" className="nav-link">
                                Clothes For Kids
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/items/create" className="nav-link">
                                Create a new item of clothing
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links