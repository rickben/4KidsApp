import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ItemsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            time: '',
        }
    }

    handleChangeInputType = async event => {
        const item_type = event.target.value
        this.setState({ item_type })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputAge = async event => {
        const age = event.target.value
        this.setState({ age })
    }

    handleChangeInputColor = async event => {
        const color = event.target.value
        this.setState({ color })
    }

    handleIncludeItem = async () => {
        const { item_type,age, color,rating } = this.state
        const payload = { item_type, rating, age, color }

        await api.insertItem(payload).then(res => {
            window.alert(`Item inserted successfully`)
            this.setState({
                item_type: '',
                rating: '',
                age: '',
                color: '',
            })
        })
    }

    render() {
        const { item_type, rating, age, color } = this.state
        return (
            <Wrapper>
                <Title>Create Item</Title>

                <Label>Item's type: </Label>
                <InputText
                    type="text"
                    value={item_type}
                    onChange={this.handleChangeInputType}
                />


                <Label>Age: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={age}
                    onChange={this.handleChangeInputAge}
                />
                <Label>Color: </Label>
                <InputText
                    type="text"
                    value={color}
                    onChange={this.handleChangeInputColor}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />
                <Button onClick={this.handleIncludeItem}>Add a new Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ItemsInsert