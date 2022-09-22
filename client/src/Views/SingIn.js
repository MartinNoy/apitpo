import * as React from 'react';
import { Navigate as Redirect } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../Assets/js/Typography';
import AppAppBar from '../Components/NavBar';
import AppForm from '../Components/Form';
import { email, required } from '../Modules/validation';
import RFTextField from '../Modules/RFTextField';
import FormButton from '../Modules/FormButton';
import FormFeedback from '../Modules/FormFeedback';
import withRoot from '../Assets/js/withRoot';
import AuthContext from '../Context/AuthProvider';

function SignIn() {
	const { setAuth } = React.useContext(AuthContext);
	const [sent, setSent] = React.useState(false);

	const validate = (values) => {
		const errors = required(['email', 'password'], values);

		if (!errors.email) {
			const emailError = email(values.email);
			if (emailError) {
				errors.email = emailError;
			}
		}

		return errors;
	};

	const handleSubmit = async (values) => {
		const errors = required(['email', 'password'], values);
		try {
			// const response = await axios.post(
			// 	LOGIN_URL,
			// 	JSON.stringify({ values.email, values.password }),
			// 	{
			// 		headers:{'Content-Type':'application/json'}
			// 	}
			// );
			console.log('credentials :: '+ values.email + ' ' + values.password)
			setSent(true);
			return <Redirect to='/'/>
		} catch (error) {
			setSent(false);
			error.email = 'Error'

			return errors
		}
	};

	return (
		<React.Fragment>
			<AppAppBar />
			<AppForm>
				<React.Fragment>
					<Typography variant="h3" gutterBottom marked="center" align="center">
						Sign In
					</Typography>
					<Typography variant="body2" align="center">
						{'Not a member yet? '}
						<Link
							href="/premium-themes/onepirate/sign-up/"
							align="center"
							underline="always"
						>
							Sign Up here
						</Link>
					</Typography>
				</React.Fragment>
				<Form
					onSubmit={handleSubmit}
					subscription={{ submitting: true }}
					validate={validate}
				>
					{({ handleSubmit: handleSubmit2, submitting }) => (
						<Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
							<Field
								autoComplete="email"
								autoFocus
								component={RFTextField}
								disabled={submitting || sent}
								fullWidth
								label="Email"
								margin="normal"
								name="email"
								required
								size="large"
							/>
							<Field
								fullWidth
								size="large"
								component={RFTextField}
								disabled={submitting || sent}
								required
								name="password"
								autoComplete="current-password"
								label="Password"
								type="password"
								margin="normal"
							/>
							<FormSpy subscription={{ submitError: true }}>
								{({ submitError }) =>
									submitError ? (
										<FormFeedback error sx={{ mt: 2 }}>
											{submitError}
										</FormFeedback>
									) : null
								}
							</FormSpy>
							<FormButton
								sx={{ mt: 3, mb: 2 }}
								disabled={submitting || sent}
								size="large"
								color="secondary"
								fullWidth
							>
								{submitting || sent ? 'Iniciando sesion ...' : 'Sign In'}
								
							</FormButton>
						</Box>
					)}
				</Form>
				<Typography align="center">
					<Link underline="always" href="/forgot-password">
						Forgot password?
					</Link>
				</Typography>
			</AppForm>
		</React.Fragment>
	);
}

export default withRoot(SignIn);
