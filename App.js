import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	const initialState = 'Open up App.js to start working on your app!';
	const [ count, setCount ] = useState(initialState);

	return (
		<View style={{ padding: 50 }}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<TextInput
					placeholder="Course Goal"
					style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 }}
				/>
				<Button title="ADD" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
