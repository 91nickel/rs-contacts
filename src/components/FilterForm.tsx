import { Formik } from 'formik'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import React, { memo } from 'react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { updateContactsFilterActionCreator } from 'src/store/actions'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'

export interface FilterFormValues {
    name: string,
    groupId: string
}

// interface FilterFormProps extends FormikConfig<Partial<FilterFormValues>> {
//   groupContactsList: GroupContactsDto[]
// }

export const FilterForm = memo(() => {

    const dispatch = useAppDispatch()
    const groupContactsList: GroupContactsDto[] = useAppSelector((state) => state.groupContacts)
    const contactsFilter: Partial<FilterFormValues> = useAppSelector((state) => state.contactsFilter)

    function onSubmit(fv: Partial<FilterFormValues>) {
        dispatch(updateContactsFilterActionCreator(fv))
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
