

import { Box, Typography, styled } from '@mui/material';



const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">manojyadav blog</Typography>
            <Box style={{display: 'flex'}}>
                
                hi well come to my website
            </Box>
        </Header>
    )
}

export default CodeForInterview;