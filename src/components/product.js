    import React, { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom'
    import axios from 'axios'

    import './product.css'



    import { Card,  CardBody, CardFooter, Image, Stack, Heading, Text, Button, Divider, ButtonGroup } from '@chakra-ui/react'

    const Product = () => {
        const {id} = useParams()


        const [data, setData] = useState({});


        // {
        //   id: 1,
        //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        //   price: 109.95,
        //   description: 
        //     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        //   category: 'men\'s clothing',
        //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        //   rating: { rate: 3.9, count: 120 }
        // }



        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data);
            if (response.status === 200) {
                setData(response.data);
            }
            } catch (error) {
            console.log(`Error fetching dat ${error.message}`);
            }
        };
    
        fetchData();
        }, [id]);


    console.log(data)


    return (
    <Card maxW='xlg' className='card-container'>
    <CardBody className='card-body'>
        <Image
        src={data.image}
        alt='Green double couch with wooden legs'
        borderRadius='xsm'
        className='product-image'
        />
        <Stack mt='6' spacing='6'>
        <Heading size='md'>{data.title}</Heading>
        <Text>
            {data.description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            {`$${data.price}`}
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
            Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
            Add to cart
        </Button>
        </ButtonGroup>
    </CardFooter>
    </Card>
    )
    }

    export default Product
