import React from "react";
import {Box, Heading, Flex, ThemeProvider, InputGroup, InputLeftElement, Input, Icon, Avatar,
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody
} from "@chakra-ui/core";
import "../stylesheets/topNavBar.css";

const navProps = {
    heading: "Content",
    userName: "Shuofeng Wang",
    userImgUrl: "https://bit.ly/dan-abramov",
    notificationContent: "No New Notifications",
}

const Header = props => {


    return (
        <ThemeProvider>
            <div className={'row'}>
                <Flex
                    as="nav"
                    align="center"
                    flexDirection={'row'}
                    // justify="space-between"
                    wrap="wrap"
                    padding="4px"
                    backgroundColor="#F2F2F2"
                    color="#000000"
                    height={'60px'}
                    boxShadow={'0px 0px 4px rgba(0, 0, 0, 0.25)'}
                    {...props}
                >
                    <box align="left" className={'col-2'}>
                        <Heading as="h1" letterSpacing={""} fontSize={'20px'} color={'#000000'} paddingLeft={'10%'}>
                            {navProps.heading}
                        </Heading>
                    </box>

                    <div className={'col-6'}></div>
                    <Flex className={'col-4'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'}>
                        <Box >
                            <InputGroup>
                                <InputLeftElement children={<Icon name="search" color="#595959" />}  />
                                <Input placeholder="Search" />
                            </InputGroup>
                        </Box>

                        <Box
                            // paddingLeft={'5%'}
                        >
                            <Popover>
                                <PopoverTrigger>
                                    <Icon name={'bell'} size="24px"/>
                                </PopoverTrigger>
                                <PopoverContent zIndex={4}>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Notifications</PopoverHeader>
                                    <PopoverBody>{navProps.notificationContent}</PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>

                        <Box
                            // mr={'4%'}
                            borderRadius={'50%'}
                            boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.29)'}
                        >
                            <Avatar name={navProps.userName} src={navProps.userImgUrl} />
                        </Box>
                    </Flex>
                </Flex>
            </div>
        </ThemeProvider>
    );
};

export default Header;