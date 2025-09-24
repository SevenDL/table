[2025-09-12 17:02:08] [DEBUG] deploy type: tdsql_single_machine
[2025-09-12 17:02:08] [ERROR] Traceback (most recent call last):
  File "/root/tdsql-10.3.29.1.0-d100-centos7.x86_64/tdsql_install/auto_deploy/run/deploy.py", line 3467, in install
    self.init_data()
  File "/root/tdsql-10.3.29.1.0-d100-centos7.x86_64/tdsql_install/auto_deploy/run/deploy.py", line 170, in init_data
    self.check_data_valid()
  File "/root/tdsql-10.3.29.1.0-d100-centos7.x86_64/tdsql_install/auto_deploy/run/deploy.py", line 219, in check_data_valid
    self.check_ip_config_valid()
  File "/root/tdsql-10.3.29.1.0-d100-centos7.x86_64/tdsql_install/auto_deploy/run/deploy.py", line 316, in check_ip_config_valid
    self.check_ip_format(ip)
  File "/root/tdsql-10.3.29.1.0-d100-centos7.x86_64/tdsql_install/auto_deploy/run/deploy.py", line 804, in check_ip_format
    raise Exception("""ip[%s] format invalid.""" % (ip))
Exception: ip[] format invalid.