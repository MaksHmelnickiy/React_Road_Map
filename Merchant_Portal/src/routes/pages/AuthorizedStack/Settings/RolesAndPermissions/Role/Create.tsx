import React from 'react';

import { useCreateRole } from 'queries/rolesPermissions';

import RoleFrom from './Form';

const CreateRole = () => {
  const { mutate: createRole, isLoading } = useCreateRole();

  return <RoleFrom onSave={createRole} isSaving={isLoading} isNew />;
};

export default CreateRole;
