import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import store, { newStore, StoreList } from 'src/store'

export interface FilterFormValues {
    name: string,
    groupId: string
}

export const FilterForm = observer(() => {

    const {data: contactsFilter, update} = newStore[StoreList.filter]
    const {data: groupContactsList, isLoading: groupsIsLoading} = newStore[StoreList.groups]

    if (groupsIsLoading) {
        return <h2>Loading...</h2>
    }

    function onSubmit(formValues: Partial<FilterFormValues>) {
        console.log('onSubmit', formValues)
        update(formValues)
    }

    return (
        <Formik initialValues={contactsFilter} onSubmit={onSubmit}>
            {({handleChange, handleSubmit}) => (
                <Form onSubmit={handleSubmit} onChange={handleSubmit}>
                    <Row xxl={4} className="g-4">
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    id={'name'}
                                    name={'name'}
                                    defaultValue={contactsFilter.name}
                                    onChange={handleChange}
                                    placeholder="name"
                                    aria-label="name"
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Select
                                id={'groupId'}
                                name={'groupId'}
                                aria-label="Поиск по группе"
                                defaultValue={contactsFilter.groupId}
                                onChange={handleChange}
                            >
                                <option>Open this select menu</option>
                                {groupContactsList.map((groupContacts) => (
                                    <option value={groupContacts.id}
                                            key={groupContacts.id}>{groupContacts.name}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">Применить</Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
})
