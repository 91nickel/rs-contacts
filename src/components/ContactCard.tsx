import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Card, ListGroup } from 'react-bootstrap'

import { Selector, ReducersList, Action } from 'src/store'

import { ContactDto } from 'src/types/dto/ContactDto'
import Reducers from 'src/store/reducers.list'
import { useAppDispatch } from 'src/store/hooks'
import { RoutesList } from 'src/routes'

interface ContactCardProps {
    contact: ContactDto,
    withLink?: boolean,
}

export const ContactCard = memo<ContactCardProps>((
    {
        contact: {photo, id, name, phone, birthday, address},
        withLink,
    },
    ) => {
        const dispatch = useAppDispatch()

        const isInFavorites = useSelector(Selector[ReducersList.favouriteContacts].includes(id))
        const isLoading = useSelector(Selector[ReducersList.favouriteContacts].isLoading())

        function handleFavourites() {
            if (isInFavorites) {
                dispatch(Action[Reducers.favouriteContacts].delete(id))
            } else {
                dispatch(Action[Reducers.favouriteContacts].addAsync(id))
            }
        }

        return (
            <Card key={id}>
                <Card.Img variant="top" src={photo}/>
                <Card.Body>
                    <Card.Title>
                        {withLink ? <Link to={`/${RoutesList.contacts}/${id}`}>{name}</Link> : name}
                    </Card.Title>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item><Link to={`tel:${phone}`} target="_blank">{phone}</Link></ListGroup.Item>
                            <ListGroup.Item>{birthday}</ListGroup.Item>
                            <ListGroup.Item>{address}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Button variant="success" onClick={handleFavourites} disabled={isLoading}>
                        {isInFavorites ? '-' : '+'}
                    </Button>
                </Card.Body>
            </Card>
        )
    },
)
