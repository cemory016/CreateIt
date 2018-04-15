import React from 'react';
import { Item } from 'semantic-ui-react';
import styled from 'styled-components'

const TossUp = styled.div`
display: flex;
flex: wrap;
`


const description = [
    'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
    'tiny stature, and even others for their massive size.',
].join(' ')

const ImageTest = () => (
    <Item.Group>
        <Item>
            <Item.Image size='small' src='https://images.unsplash.com/photo-1516053256215-94022213b13c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=703a399feb6c6139d4e355122c0ef2cc&auto=format&fit=crop&w=800&q=60' width="auto" height="200px" />

            <Item.Content>
                <Item.Header as='a'>Cute Dog</Item.Header>
                <TossUp>
                    <Item.Description>
                        <p>{description}</p>
                        <p>
                            Many Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.
     also have their own barometers for what makes a cute dog.
              </p>
                    </Item.Description>
                    </TossUp>
            </Item.Content>
        </Item>

            <Item>
                <Item.Image size='small' src='https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f335484571a1a82c91c7602448408d9&auto=format&fit=crop&w=800&q=60' width="auto" height="200px" />

                <Item.Content>
                    <Item.Header as='a'>Cute Dog</Item.Header>
                    <Item.Description content={description} />
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://images.unsplash.com/photo-1470342495351-a5f90c5011cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4810751019fb632656ffe28acd813135&auto=format&fit=crop&w=800&q=60' width="auto" height="200px" />
                <Item.Content header='Cute Dog' />
                <Item.Description>
                    <p>
                        Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.Many people also have their own barometers for what makes a cute dog.
              </p>
                </Item.Description>
            </Item>
    </Item.Group>
)

export default ImageTest

// https://images.unsplash.com/photo-1516053256215-94022213b13c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=703a399feb6c6139d4e355122c0ef2cc&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f335484571a1a82c91c7602448408d9&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1470342495351-a5f90c5011cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4810751019fb632656ffe28acd813135&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79c398c8a111d7a96c6df6de0c50094c&auto=format&fit=crop&w=800&q=60

// https://images.unsplash.com/photo-1472517990513-4f22ae253bd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6c545fc22588fc8a5e76d4939fa1aa4&auto=format&fit=crop&w=800&q=60