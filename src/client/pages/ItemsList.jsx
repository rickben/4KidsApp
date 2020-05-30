import React, { Component } from 'react'
import  ReactTable from 'react-table-v6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-v6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateItem extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/items/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteItem extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the item ${this.props.id} permanently?`,
            )
        ) {
            api.deleteItemById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllItems().then(items => {
            this.setState({
                items: items.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { items, isLoading } = this.state
        console.log('TCL: ItemsList -> render -> items', items)

        const columns = [
            {
                Header: 'TYPE',
                accessor: 'item_type',
                filterable: true,
            },
            {
                Header: 'Color',
                accessor: 'color',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Age',
                accessor: 'age',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteItem id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateItem id={props.original._id} />
                        </span>
                    )
                },
            },
        ]


        let showTable = true
        if (!items.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={items}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ItemsList
