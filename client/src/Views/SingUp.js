import * as React from 'react';
import {Navigate as Redirect} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../Assets/js/Typography';
import AppAppBar from '../Components/NavBar';
import AppForm from '../Components/Form';
import { email, required } from '../Modules/validation';
import RFTextField from '../Modules/RFTextField';
import FormButton from '../Modules/FormButton';
import FormFeedback from '../Modules/FormFeedback';
import withRoot from '../Assets/js/withRoot';

function SignUp() {
	const [sent, setSent] = React.useState(false);

	const validate = (values) => {
		const errors = required(['firstName', 'lastName', 'email', 'phone'], values);

		if (!errors.email) {
			const emailError = email(values.email);
			if (emailError) {
				errors.email = emailError;
			}
		}

		return errors;
	};

	const handleSubmit = (value) => {
		console.log('valores :: ' + JSON.stringify(value));
		setSent(true);
	};

	return (
		<React.Fragment>
			<AppAppBar />
			<AppForm>
				<React.Fragment>
					<Typography variant="h3" gutterBottom marked="center" align="center">
						Registro
					</Typography>
					<Typography variant="body2" align="center">
						<Link href="/sign-in" underline="always">
							Ya tienes una cuenta?
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
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Field
										autoFocus
										component={RFTextField}
										disabled={submitting || sent}
										autoComplete="given-name"
										fullWidth
										label="Nombre"
										name="firstName"
										required
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Field
										component={RFTextField}
										disabled={submitting || sent}
										autoComplete="family-name"
										fullWidth
										label="Apellido"
										name="lastName"
										required
									/>
								</Grid>
							</Grid>
							<Field
								autoComplete="email"
								component={RFTextField}
								disabled={submitting || sent}
								fullWidth
								label="Email"
								margin="normal"
								name="email"
								required
							/>
							<Field
								fullWidth
								component={RFTextField}
								disabled={submitting || sent}
								required
								name="phone"
								autoComplete="new-password"
								label="Telefono"
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
								color="secondary"
								fullWidth
							>
								{submitting || sent ? <Redirect to='/'/> : 'Registrarse'}
							</FormButton>
						</Box>
					)}
				</Form>
			</AppForm>
		</React.Fragment>
	);
}

export default withRoot(SignUp);
