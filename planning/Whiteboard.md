S̶a̶t̶u̶r̶d̶a̶y̶ 5̶/̶2̶1̶/̶2̶2̶:̶ 
S̶e̶t̶u̶p̶ b̶a̶c̶k̶e̶n̶d̶ r̶o̶u̶t̶e̶s̶,̶ m̶o̶d̶e̶l̶,̶ d̶e̶p̶l̶o̶y̶
    -̶-̶5̶ d̶u̶m̶m̶y̶ a̶c̶c̶o̶u̶n̶t̶s̶ f̶o̶r̶ m̶o̶c̶k̶ d̶e̶m̶o̶
    -̶-̶1̶ s̶c̶h̶e̶m̶a̶/̶m̶o̶d̶e̶l̶/̶s̶e̶e̶d̶ f̶i̶l̶e̶ f̶o̶r̶ a̶l̶l̶ u̶s̶e̶r̶s̶
    -̶-̶r̶o̶u̶t̶e̶s̶:̶
        a̶d̶d̶,̶ r̶e̶m̶o̶v̶e̶,̶ e̶d̶i̶t̶ p̶r̶o̶f̶i̶l̶e̶
    
    --based on user-->data will filter and pull from horoscope API for personalized horoscope on profile


5/24/22:

Following Ernest advice:
move up all of out user function/get user, get request, put, post, delete fetch requests from backend into the Top App function, and then pass user as a prop down to the other components, and set prop defined as user at the <routes> in the return statement.

D̶o̶ w̶e̶ n̶e̶e̶d̶ t̶o̶ u̶p̶d̶a̶t̶e̶ f̶i̶l̶e̶s̶/̶a̶n̶d̶ o̶r̶ a̶d̶d̶ a̶ s̶e̶p̶a̶r̶a̶t̶e̶ f̶i̶l̶e̶ f̶o̶r̶ d̶i̶s̶p̶l̶a̶y̶i̶n̶g̶ u̶s̶e̶r̶s̶ i̶n̶ g̶e̶n̶e̶r̶a̶l̶?̶ o̶r̶ s̶h̶o̶u̶l̶d̶ t̶h̶a̶t̶ j̶u̶s̶t̶ b̶e̶ t̶h̶e̶ s̶i̶g̶n̶u̶p̶ f̶o̶r̶m̶.̶ 

        -̶R̶o̶u̶t̶e̶s̶ a̶r̶e̶ c̶u̶r̶r̶e̶n̶t̶l̶y̶ i̶m̶p̶o̶r̶t̶e̶d̶ a̶n̶d̶ l̶i̶n̶k̶e̶d̶ o̶n̶ t̶h̶e̶ m̶a̶i̶n̶ A̶p̶p̶.̶j̶s̶,̶ s̶o̶ I̶ c̶a̶n̶n̶o̶t̶ e̶s̶t̶a̶b̶l̶i̶s̶h̶ o̶r̶ d̶e̶f̶i̶n̶e̶ p̶r̶o̶p̶s̶ t̶h̶e̶r̶e̶,̶ b̶e̶c̶a̶u̶s̶e̶ w̶e̶ d̶o̶ t̶h̶a̶t̶ i̶n̶ t̶h̶e̶ M̶y̶A̶c̶c̶o̶u̶n̶t̶.̶j̶s̶ P̶a̶g̶e̶.̶ S̶h̶o̶u̶l̶d̶ w̶e̶ m̶o̶v̶e̶ j̶u̶s̶t̶ m̶o̶v̶e̶ t̶h̶e̶s̶e̶ g̶e̶t̶/̶r̶e̶q̶u̶e̶s̶t̶ f̶u̶n̶c̶t̶i̶o̶n̶s̶ t̶o̶ t̶h̶e̶ m̶a̶i̶n̶ A̶p̶p̶.̶j̶s̶ f̶u̶n̶c̶t̶i̶o̶n̶ p̶a̶g̶e̶?̶ A̶n̶d̶ e̶s̶t̶a̶b̶l̶i̶s̶h̶ t̶h̶a̶t̶ a̶s̶ t̶h̶e̶ p̶a̶r̶e̶n̶t̶ t̶o̶ p̶a̶s̶s̶ d̶o̶w̶n̶ t̶h̶e̶s̶e̶ p̶r̶o̶p̶s̶?̶
        -̶s̶h̶o̶u̶l̶d̶ w̶e̶ b̶e̶ l̶i̶n̶k̶i̶n̶g̶ o̶u̶r̶ r̶o̶u̶t̶e̶s̶ i̶n̶ t̶h̶i̶s̶ M̶y̶A̶c̶c̶o̶u̶n̶t̶.̶j̶s̶ p̶a̶g̶e̶ r̶e̶t̶u̶r̶n̶?̶;̶ T̶h̶i̶s̶ i̶s̶ t̶h̶e̶ s̶p̶a̶c̶e̶ w̶h̶e̶r̶e̶ t̶h̶e̶ p̶r̶o̶p̶s̶ c̶a̶n̶ b̶e̶ p̶a̶s̶s̶e̶d̶ d̶o̶w̶n̶ a̶n̶d̶ d̶e̶f̶i̶n̶e̶d̶ a̶s̶ e̶l̶e̶m̶e̶n̶t̶s̶ p̶e̶r̶ p̶a̶g̶e̶,̶ i̶.̶e̶.̶,̶ <̶R̶o̶u̶t̶e̶ 
                p̶a̶t̶h̶=̶ '̶/̶u̶s̶e̶r̶/̶:̶i̶d̶'̶
                e̶l̶e̶m̶e̶n̶t̶=̶{̶
                    <̶E̶d̶i̶t̶P̶r̶o̶f̶i̶l̶e̶ 
                        s̶e̶l̶e̶c̶t̶e̶d̶U̶s̶e̶r̶=̶{̶s̶e̶l̶e̶c̶t̶e̶d̶U̶s̶e̶r̶}̶
                        u̶p̶d̶a̶t̶e̶U̶s̶e̶r̶=̶{̶u̶p̶d̶a̶t̶e̶U̶s̶e̶r̶}̶
                        d̶e̶l̶e̶t̶e̶U̶s̶e̶r̶=̶{̶d̶e̶l̶e̶t̶e̶U̶s̶e̶r̶}̶
                    /̶>̶
                }̶ /̶>̶

    D̶i̶s̶p̶l̶a̶y̶ u̶s̶e̶r̶s̶-̶-̶
     .̶m̶a̶p̶ f̶u̶n̶c̶t̶i̶o̶n̶ t̶o̶ d̶i̶s̶p̶l̶a̶y̶ "̶m̶y̶ a̶c̶c̶o̶u̶n̶t̶ p̶a̶g̶e̶/̶p̶r̶o̶f̶i̶l̶e̶"̶
        -̶u̶s̶e̶r̶.̶_̶i̶d̶ w̶i̶t̶h̶ a̶ k̶e̶y̶
        -̶a̶ l̶i̶n̶k̶ t̶o̶ e̶a̶c̶h̶ m̶y̶A̶c̶c̶o̶u̶n̶t̶ p̶a̶g̶e̶?̶/̶w̶i̶t̶h̶ a̶n̶ e̶m̶p̶t̶y̶ f̶o̶r̶m̶ t̶e̶m̶p̶l̶a̶t̶e̶
    D̶o̶ w̶e̶ w̶a̶n̶t̶ t̶o̶ u̶s̶e̶ M̶y̶A̶c̶c̶o̶u̶n̶t̶.̶j̶s̶ a̶s̶ t̶h̶e̶ m̶a̶i̶n̶ r̶o̶u̶t̶i̶n̶g̶/̶p̶a̶r̶e̶n̶t̶ p̶a̶g̶e̶ f̶o̶r̶ a̶l̶l̶ o̶f̶ o̶u̶r̶ f̶u̶n̶c̶t̶i̶o̶n̶s̶ f̶o̶r̶ b̶a̶c̶k̶e̶n̶d̶ r̶e̶q̶u̶e̶s̶t̶s̶/̶u̶r̶l̶s̶:̶
        -̶g̶e̶t̶/̶r̶e̶a̶d̶ (̶c̶u̶r̶r̶e̶n̶t̶l̶y̶ o̶n̶ t̶h̶i̶s̶ p̶a̶g̶e̶)̶
        -̶p̶o̶s̶t̶/̶c̶r̶e̶a̶t̶e̶
        -̶p̶u̶t̶/̶u̶p̶d̶a̶t̶e̶
        -̶d̶e̶l̶e̶t̶e̶


example request functions PUT, Delete
  // const updateUser = (user, id) => {
  //   const putURL = "http://localhost:3001/myaccount/edit/"
  //   fetch (putURL + id, {
  //     method: 'PUT',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(selectedUser)
  //   })
  //   getUser()


// const deleteUser = async id => {
//   // make delete request to create people
//   await fetch(deleteURL + id, {
//       method: "delete",
//       })
//   // update list of people
//   getUser()
// }



5/25/22
LOGIN
- need to map user to an array so that we can user.find for updating profile
