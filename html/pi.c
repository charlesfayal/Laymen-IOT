#include <wiringPi.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <unistd.h>

#define MAX_CHAR_SIZE 255

enum configType{
  I_IO_MOD         = 0,
  I_PORT_MOD       = 1,
  O_IO_MOD,
  O_PORT_MOD,
  I_ACTION_MOD,
  I_ACTION_VAL,
  I_ACTION_DUR,
  I_ACTION_COMP
  
};

/*Remove the leading and trailing whitspaces*/
char *strstrip(char *s)
{
  size_t size;
  char *end;

  size = strlen(s);

  if (!size)
    return s;

  end = s + size - 1;
  while (end >= s && isspace(*end))
    end--;
  *(end + 1) = '\0';

  while (*s && isspace(*s))
    s++;

  return s;
}

void run_clock(int time, int duration, int gpio)
{
  sleep(time);
  
  digitalWrite(gpio, HIGH);
  
  sleep(duration);

  digitalWrite(gpio, LOW);

  return;
  
}

int main( int agrc, char *argv[])
{
  FILE *fp;
  char fileName[10];
  char buff[MAX_CHAR_SIZE];
  char config[10][20];
  memset(config, 0, sizeof(config));

  strcpy(fileName, argv[1]);
  
  fp = fopen(fileName, "r");
  
  /* skip first two lines*/
  fgets(buff, MAX_CHAR_SIZE, fp);
  fgets(buff, MAX_CHAR_SIZE, fp);

  int index = 0;

  while( fgets(buff, MAX_CHAR_SIZE, fp))  //stores each line in the array
      strcpy(config[index++], buff);

  // printf("%s\n", strstrip(config[I_IO_MOD]));
  
  fclose(fp);
  wiringPiSetup();
  
  if(!strcmp(strstrip(config[I_IO_MOD]), "Clock") && !strcmp(strstrip(config[O_IO_MOD]), "Relay Switch"))
    {
      int gpio_out   = atoi(config[O_PORT_MOD]);
      int action_val = atoi(config[I_ACTION_VAL]);
      int action_dur = atoi(config[I_ACTION_DUR]);
      
      printf("We got the Clock!\n");
      pinMode(gpio_out, OUTPUT);

      run_clock(action_val, action_dur, gpio_out);
      
      if(!strcmp(strstrip(config[I_ACTION_COMP]), "Repeat"))
	  while(1)
	    run_clock(action_val, action_dur, gpio_out);
      else
	return 0;           
	  
    }
  return 0;
}
