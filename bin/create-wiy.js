#!/usr/bin/env node
const inquirer = require('inquirer').default;
const fse = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

async function init() {
    const questions = [
        {
            type: 'input',
            name: 'projectName',
            message: 'Project name: ',
            default: 'wiy-example',
            validate: (value) => {
                if (value.length) {
                    return true;
                } else {
                    return 'Project name is required!';
                }
            }
        },
    ];

    const answers = await inquirer.prompt(questions);
    const projectName = answers.projectName;

    const templateDir = path.join(__dirname, '../templates/simple');
    const projectDir = path.join(process.cwd(), projectName);
    await fse.copy(templateDir, projectDir, { overwrite: true });

    const packageJsonPath = path.join(projectDir, 'package.json');
    const pkg = await fse.readJson(packageJsonPath);
    pkg.name = projectName;
    await fse.writeJson(packageJsonPath, pkg, { spaces: 2 });

    // execSync('npm install @wiyit/wiy @wiyit/wiy-ui', {
    //     stdio: 'inherit',
    //     cwd: projectDir,
    // });
    // execSync('npm install -D @wiyit/wiy-cli', {
    //     stdio: 'inherit',
    //     cwd: projectDir,
    // });
    console.log(`Project ${projectName} has been created successfully.`);
}

init().catch((err) => {
    console.error(err);
});