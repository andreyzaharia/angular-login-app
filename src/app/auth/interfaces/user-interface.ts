export interface User {
  id:                    number;
  name:                  string;
  surname:               string;
  email:                 string;
  password:              string;
  address:               string;
  role:                  string;
  tokens:                number;
  soft_delete:           boolean;
  enabled:               boolean;
  authorities:           Authority[];
  username:              string;
  accountNonLocked:      boolean;
  credentialsNonExpired: boolean;
  accountNonExpired:     boolean;
}

export interface Authority {
  authority: string;
}
