// import {FC, useState} from 'react'


// interface FuncComponentProps {
//   items: any
// }

// const FuncComponent: FC = ({items}: FuncComponentProps) => {

//   const [darkModeOn, setDarkModeOn] = useState<boolean>(false)

//   return (
//     <Container className={darkModeOn ? "dark" : "light"}>
//       <List>
//         {
//           items.map((data) => {
//             return (
//               <DataItem data={data}/>
//             )
//           })
//         }
//       </List>
//       <p>Dark mode</p>
//       <Checkbox
//         checked={darkModeOn}
//         onChange={() => setDarkModeOn(!darkModeOn)}
//       />
//     </Container>
//   )
// }

// export default FuncComponent