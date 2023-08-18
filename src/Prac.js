import styled from "styled-components";

const Father = styled.div`
  display: flex;

`;

const Box = styled.div`
  background-color: ${(props)=>props.bgcolor};
  width : 100px;
  height : 100px;
`;


const Text = styled.span`
  color : white;
`;

const Circle = styled(Box)`
  border-radius : 50px;
`;
const Input = styled.input.attrs({required: true})`
  background-color: tomato;
`;

function Prac() {
  return (
    <Father as="header">
      <Box bgcolor="teal">
        <Text>
            Hello
        </Text>
      </Box>
      <Circle bgcolor="tomato"/>
      <Input/>
      <Input/>
    </Father>
  );
}

export default Prac;
