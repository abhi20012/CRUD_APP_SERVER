import User from '../schema/user-schema.js';

export const addUser = async (request, response)=>{
	const user = request.body; 
	//validate body of post api with imported user

	const validateUser = new User(user); // schema object to validate, if it pass then next move with hit to save it into database

	try{
		await validateUser.save(); // save is a function of mongoDB
		response.status(201).json(validateUser); //response returned after data is saved successfullly in database
	} catch(error){
		response.status(409).json({message: error.message});
	}

}


export const getUsers = async (request, response) => {
	try{
	const users =	await User.find({});
	response.status(200).json(users);
	} catch(error) {
		response.status(404).json({messaage: message});
	}
}

export const getUser = async (request, response) => {
	// console.log(request.params.id)
	try{
	const user =	await User.find({_id: request.params.id});
	response.status(200).json(user);
	} catch(error) {
		response.status(404).json({messaage: message});
	}
}

export const editUser = async (request, response) => {
	let user = request.body;
	const editUser = new User(user); //this will validate upcoming user body saved in "user"

	try{
		await User.updateOne({_id : request.params.id}, editUser);
		response.status(201).json(editUser);
		} catch(error) {
			response.status(409).json({messaage: error.message});
		}
}

export const deleteUser = async (request, response) => {
	try{
		await User.deleteOne({_id: request.params.id});
		response.status(200).json({messaage:"User Deleted Sucessfully"});
	} catch(error){
		response.status(409).json({messaage: error.messaage});
	}
}

