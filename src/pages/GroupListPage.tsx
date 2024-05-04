import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
// import { useGetGroupContactsQuery } from 'src/store/group'
import store, { StoreList } from 'src/store'
import { observer } from 'mobx-react-lite'

export const GroupListPage = observer(() => {
    // const groupContacts = useSelector(Selector[ReducersList.groupContacts].get())
    // const {data: groupContacts} = useGetGroupContactsQuery()
    const {data: groupContacts} = store[StoreList.groups]

    if (!groupContacts) {
        return <h2>Loading...</h2>
    }

    return (
        <Row xxl={4}>
            {groupContacts.map(gc => (
                <Col key={gc.id}>
                    <GroupContactsCard groupContacts={gc} withLink/>
                </Col>
            ))}
        </Row>
    )
})
