import { gql } from "@apollo/client";

export const LOGIN_ADMIN = gql`
  mutation superuserLogin($email: String!, $password: String!) {
    superuserLogin(email: $email, password: $password) {
      id
      role
      email
      token
    }
  }
`;

export const UPDATE_STATUS = gql`
  mutation updateStatus($id: String!, $status: String!) {
    updateStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;
export const UPDATE_PAYMENT_STATUS = gql`
  mutation updatePaymentStatus($id: String!, $payment: String!) {
    updatePaymentStatus(id: $id, payment: $payment) {
      id
      paymentStatus
    }
  }
`;

export const UPDATE_REASON = gql`
  mutation updateReason($id: String!, $reason: String!) {
    updateReason(id: $id, reason: $reason) {
      id
      reason
    }
  }
`;

export const CREATE_ADMIN = gql`
  mutation createAdmin($role: String!, $email: String!, $password: String!) {
    createUser(
      registerInput: { role: $role, email: $email, password: $password }
    ) {
      id
      role
      token
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;

export const DELETE_VERIFICATION = gql`
  mutation deleteVerification($userId: String!) {
    deleteVerification(userId: $userId)
  }
`;

export const UPLOAD_REPORT = gql`
  mutation uploadReport($userId: String!, $fileName: String!) {
    uploadReport(userId: $userId, fileName: $fileName) {
      id
      fileName
    }
  }
`;
