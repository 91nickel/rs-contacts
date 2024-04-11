import React, { memo } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'

import { useAppDispatch, useAppSelector } from 'src/store/hooks'

import { selector as contactsFilterSelectors, action as contactsFilterActions } from 'src/store/contactsFilter'
import { selector as groupContactsSelectors } from 'src/store/groupContacts'

export interface FilterFormValues {
    name: string,
    groupId: string
}

export const FilterForm = memo(() => {

    const dispatch = useAppDispatch()

    const groupContactsList = useSelector(groupContactsSelectors.get())
    const contactsFilter = useSelector(contactsFilterSelectors.get())

    function onSubmit(fv: Partial<FilterFormValues>) {
        dispatch(contactsFilterActions.update(fv))
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
                            <Button variant={'primary'} type={'submit'}>Применить</Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
})
