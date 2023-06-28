/**
 * 读取配置文件
 * 将config目录中的基础配置文件config.yml与当前运行环境对应的配置文件进行合并
 * 当前运行环境查看package.json运行脚本中配置的cross-env
 *
 * @author: Cody
 * @time: 2023-06-28 09:30:47
 */
import { join } from 'path';
import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
import * as _ from 'lodash';

const BASE_CONFIG_FILE = 'config.yml';
const ENV_CONFIG_FILE = `config.${process.env.NODE_ENV || 'dev'}.yml`;
const CONFIG_DIR_PATH = join(__dirname, '../config');

const baseConfigFilePath = join(CONFIG_DIR_PATH, BASE_CONFIG_FILE);
const envConfigFilePath = join(CONFIG_DIR_PATH, ENV_CONFIG_FILE);

const baseConfig = yaml.load(readFileSync(baseConfigFilePath, 'utf8'));
const envConfig = yaml.load(readFileSync(envConfigFilePath, 'utf8'));

export default () => {
  return _.merge(baseConfig, envConfig);
};
